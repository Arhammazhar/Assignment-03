import Image from "next/image";
import Author from "@/public/Arham.jpg"
export default function Home() {
  return (
    <div className="parent">
      <div className="child">
         <h1 className="heading"><span className="color">Introduction</span> <br /></h1>
         <div className="child">
        Hey there! <br />My name is <span className="greenColor">Arham</span> <br />I am a student in GIAIC!
          </div>
      </div>
      <div className="image">
        <Image src={Author}  alt="Me" width={300} height={400}/>
      </div>
    </div>
  );
}
