// Write your code here!
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

displayPosts(posts)

  //console.log(posts)
  
}


function displayPosts(posts){
    
const postList = document.getElementById('post-list')    
   
for(const post of posts){
        
let li = document.createElement("li")

let h1 = document.createElement("h1")
h1.textContent = post.title

let p = document.createElement("p")
p.textContent = post.body

li.appendChild(h1)
li.appendChild(p)


postList.appendChild(li)


        //console.log(post)

    }

}



getPosts()





