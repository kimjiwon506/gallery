import React, { useRef, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageBox from './components/imageBox';
// import ImageBox from './components/imageBox';

function App() {
  //useRef = hook
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);
  
  // console.log(imageList)

  return (
    <div className='container'>
      <div className={imageList.length > 0 ? 'initialBoxRow' : 'initialBox'}>
        {/* true && true //true , true && 1 //1 확인후 true내뱉음 */}
        {
          imageList.length === 0 && 
            <div className='center'>
              이미지가 없습니다.<br />
              이미지를 추가해주세요.
            </div>
        }
        <input type="file" ref={inputRef} onChange={(e)=>{
          if(e.currentTarget.files?.[0]){
            const file = e.currentTarget.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (event) => {
              setImageList(prev =>  [...prev, event.target?.result as string]);
            }
          }
        }} />
        {
          imageList.map((el, index) => <ImageBox key={el + index} src={el} />)
        }
        <div className='plusBox'
          onClick={() => {
            inputRef.current?.click()
          }}
        >+</div>
      </div>
    </div>
  );
}

export default App;
