type categoryType ={
    topic:string
    value:string
}
type difficultyType={
    difficulty:string
    value:string

}

type Trivia={
  categories :categoryType[]
  difficulties:difficultyType[]

}


export const {categories,difficulties}:Trivia= {categories:[   
    {   topic:'----Choose Topic----' , value:"" },
    {   topic:'General Knowledge', value:"9" },
    {   topic:'Animals ', value:"27"},
    {   topic:'Art ', value:"25"},
    {   topic:'Celebrities',value:"26"},
    {   topic:'Entertainment: Anime &Manga',value:"31"},
    {   topic:'Entertainment: Books', value:"10"},
    {   topic:'Entertainment: Film', value:"11"},
    {   topic:'Entertainment: Comicbooks', value:"29"},
    {   topic:'Entertainment: Cartoons',value:"32"},
    {   topic:'Entertainment: Music', value:"12"},
    {   topic:'Entertainment: Musicals and theatre', value:"13"},
    {   topic:'Entertainment: Television' , value:"14"},
    {   topic:'Entertainment: Videogames' , value:"15"},
    {   topic:'Entertainment: Boardgames' , value:"16"},
    {   topic:'Geography' , value:"22"},
    {   topic:'History' , value:"23"},
    {   topic:'Mythology', value:"20"},
    {   topic:'Politics', value:"24" },
    {   topic:'Science and Nature' , value:"17"},
    {   topic:'Science: Computers ', value:"18"},
    {   topic:'Science: Gadgets', value:"30"},
    {   topic:'Science: Mathematics' , value:"19"},
    {   topic:'Sports', value:"21"},
    {   topic:'Vehicles' , value:"28"},
    
],
difficulties:[
    {difficulty:'----Choose Difficulty----',value:''},
    {difficulty:'easy',value:'easy'},
    {difficulty:'medium',value:'medium'},
    {difficulty:'hard',value:'hard'}]}