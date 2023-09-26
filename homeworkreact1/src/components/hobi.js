
export function Hobby() {

const onHover = () => {
    console.log("By a guitar TODAY");
}

const onLeave = () => {
    console.log("hello there!!!");
}
return (
<div className="myhobby">
    <img src="https://play-guitars.com/wp-content/uploads/2019/06/which-is-the-easiest-guitar-to-learn-for-beginners.jpg" 
    className="slika-gitara"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    ></img>

</div>
    )
}