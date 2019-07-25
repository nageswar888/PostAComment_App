import { Component, OnInit } from '@angular/core';
import {CommentsLikesService} from '../comments-likes.service';
import {LikesService} from '../likes.service';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-comments-likes',
  templateUrl: './comments-likes.component.html',
  styleUrls: ['./comments-likes.component.css']
})
export class CommentsLikesComponent implements OnInit {



  public complexForm : FormGroup;

  public id: number;
  private sub: any;
  public p: number = 1;
  public collection: any[]
  public comments: any =[];
  public likes: any;
  public postings: any;
  public submitted: boolean;
  private formdata: any;
  public alert: any = false


  constructor(private cservice: CommentsLikesService,
              private likeservice: LikesService,
              private route: ActivatedRoute,
              private service: PostService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getting_id()
    this.getComments(this.id);
    this.getLikes(this.id);
    this.getPostInComt(this.id)

    this.complexForm = this.fb.group({
      'text': [null, [Validators.required, Validators.pattern(/^[^-\s][a-zA-Z0-9_\s-]+$/)]],
      'commentedBy': [null, [Validators.required,Validators.pattern("^[^-\\s][a-zA-Z0-9_\\s-]+$")]], //if we put double quotes then / is not required
      'postId':[this.id]
    });
  }

  get f() { return this.complexForm.controls; }


  getting_id(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  getComments(id) {
    this.cservice.getComments(id).subscribe((response) => {
      this.comments = response;
    })
  }

  getLikes(id) {
    this.likeservice.getLikes(id).subscribe((response) => {
      this.likes= response
    })
  }

  postLikes(){
    let data
    console.log("--------",this.id)
    let params = this.id
    this.likeservice.postLike(params).subscribe((responce) => {
      data = responce
    }, () =>{},
      () => { this.likes.push(data)})
    //location.reload();
  }

  getPostInComt(id) {
    this.service.getPostInComt(id).subscribe((response) => {
      this.postings = response;
    })
  }

  submit(value){
    this.submitted = true
    this.formdata = value

    if (this.complexForm.invalid) {
      return;
    }
    else{
      this.createComment(this.formdata)
      this.alert= true
      //this.complexForm.reset()
    }
    }

  createComment(formdata){
    let data
  this.cservice.createComment(formdata).subscribe(users=>{
  console.log(users);
  data = users
  }, () =>{},
    () =>{ this.comments.push(data)});
  }

}

