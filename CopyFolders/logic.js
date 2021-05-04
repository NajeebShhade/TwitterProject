let _array = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

let postIdCounter = _array.length;
let commentIdCounter = 0
for (let post of _array){
    commentIdCounter += post.comments.length
}
console.log(commentIdCounter)

const Tweeter = function(){
   const getPosts = function(){
    return _array
  }
const addPosts = function(ftext){
    let counter = 1
    for(let postsId of _array){
        if(postsId.id != "p"+counter){
        let addingNewPost = {
            text : ftext,
            id: "p" + counter,
            comments: []
        }
        _array.push(addingNewPost)
        }
        else counter ++
    }
}
const removePost = function(pid){
    for(i=0 ;i<array.length; i++){
        if(array[i].id === pid)
        _array.splice(i,1)
    }

}
return {
    get: getPosts,
    add: addPosts,
    remove: removePost
}
}
const tweeter = Tweeter()
let counter11 =10
console.log(typeof("ahh sex" + counter11))
console.log(tweeter.get())
tweeter.add("this is my text")
console.log(tweeter.get())