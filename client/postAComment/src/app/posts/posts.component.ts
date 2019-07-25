import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public complexForm : FormGroup;

  public userFilter
  public postings: any = [];
  public submitted: boolean;
  public formdata: any;


  public pageNo: number;
  public itemsPPage: number=4;
  public total:number;
  public page: any
  public pageno: any=1;

  Search: any = {post: '', user: '', title: ''};

  public SearchByPost: any = ''
  public SearchByUser: any = ''
  public SearchByTitle: any = ''

  public columnName: any = 'undefined';
  public alert: any = false
  public loggedUser: any;

  constructor(private service: PostService,
              private fb: FormBuilder,
              private Routes:Router,
              private localstorage: LocalStorage) { }

  ngOnInit() {
    this.getpost()

    this.localstorage.getItem('user').subscribe((user) => {
      this.loggedUser = user
    })

    this.complexForm = this.fb.group({
      'postedBy': [null,  [Validators.required,Validators.pattern(/^[^-\s][a-zA-Z0-9_\s-]+$/)]], //if we put double quotes then / is not required
      'title': [null, [Validators.required,Validators.pattern("^[^-\\s][a-zA-Z0-9_\\s-]+$")]],
      'text': [null, [Validators.required,,Validators.pattern("^[^-\\s][a-zA-Z0-9_\\s-]+$")]]
    });
    }

  get f() { return this.complexForm.controls; }


  getpost() {
   // console.log("method call")
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      post: this.Search.post,
      user: this.Search.user,
      title: this.Search.title,
    };
    this.service.getPost( this.page).subscribe((response) => {
      this.postings = response.rows;
      this.total = response.count
      //console.log("postings in getpost",this.postings)
    })
  }

  getPagination(pageNumber){

    this.pageno=pageNumber;
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      post: this.Search.post,
      user: this.Search.user,
      title: this.Search.title,
    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      //console.log("postings in getPagination",this.postings)
      })
  }



  submit(value){
    this.submitted = true
    this.formdata = value
    if (this.complexForm.invalid) {
      return;
    }
    else{
      this.createPost(this.formdata)
      this.alert=true
    }
  }

  createPost(formdata){
    let user: any;
    this.service.createPost(formdata).subscribe(data=>{
      user = data;
    },
      ()=> {},
      () => {
      this.getpost()
      });
  }

  navigate(value){
    this.Routes.navigate(['/comments-likes', value])
    //console.log(value)
  }

  /*search(value){
    if(value=="user"){
      this.Search = this.SearchByUser
      this.columnName = 'postedBy'
      this.searchByUser()
    }
    else if(value=="title"){
      this.Search = this.SearchByTitle
      this.columnName = 'title'
      this.searchByTitle()
    }
    else if(value=="post"){
      this.Search = this.SearchByPost
      this.columnName = 'text'
      this.searchByPost()
    }
  }*/

  /*searchByUser(){
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.Search,
      columnName : this.columnName
    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      this.total = response.count

    })
  }*/

  /*searchByTitle(){
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.Search,
      columnName : this.columnName

    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      this.total = response.count

    })
  }*/

  /*searchByPost(){
    this.page={
      pageNo:this.pageno,
      itemsPerPage:this.itemsPPage,
      Search: this.Search,
      columnName : this.columnName
    };
    this.service.getPost(this.page).subscribe(response =>{
      this.postings = response.rows;
      this.total = response.count

    })
  }*/
  navigateToProfile(){
    this.Routes.navigate(['/profile'])
  }

  logout(){
    this.Routes.navigate(['/login'])
  }

  clearingForm(){
    this.complexForm.reset()
  }

}
