import React from 'react';
import logo from './logo.svg';
import './App.css';
import ai1 from './images/ai.jpeg'
import ai2 from './images/ai2.png'
import ai3 from './images/ai3.jpg'
import ai4 from './images/ai6.jpg'
import ai5 from './images/ai5.jpg'

import Left from './components/Left/Left';
import Right from './components/Right/Right';  
const posts = [
  {
    title: "Hướng dẫn học React JS",
    src: ai1,
    author: "Nguyễn Nhàn",
    time: "Th2 23, 2016",
    genres: ["Javascript", "React"],
    rate: 4.5,
    content: "Hướng dẫn học ReactJs sao cho hiệu quả! Nếu bạn mới làm quen với React(hoặc phần front-end nói..."
  },
  {
    title: "Hướng dẫn cấu trúc thư mục và cách viết component chuẩn trong react",
    src: ai2,
    author: "Nguyễn Nhàn",
    time: "Th5 7, 2016",
    genres: ["Javascript", "Lập trình", "Môi trường phát triển", "React"],
    rate: 5.0,
    content: "Sau một thời gian tìm hiểu và áp dụng rất hiệu quả, hôm nay mình sẽ chia sẻ với các bạn cấu trúc thư..."
  },
  {
    title: "Hướng dẫn cài đặt webpack để viết ReactJS/ES6",
    src: ai3,
    author: "Nguyễn Nhàn",
    time: "Th7 20, 2016",
    genres: ["Javascript", "Lập trình", "Môi trường phát triển", "React"],
    rate: 0,
    content: "Trên trang chủ của Reactjs thì các mã ví dụ đều được viết bằng ES5, mặc dù viết bằng ES5 hay ES6..."
  },
  {
    title: "Hướng dẫn sử dụng redux hiệu quả trong sử dụng react",
    src: ai4,
    author: "Nguyễn Nhàn",
    time: "Th2 28, 2016",
    genres: ["Javascript", "Lập trình", "Môi trường phát triển", "React", "React Native"],
    rate: 0,
    content: "Câu hỏi: Khi nào thì nên sử dụng Application State(Redux Store), khi nào thì nên sử dụng Local..."
  },
  {
    title: "Vòng đời của component trong ReactJS với es6",
    src: ai5,
    author: "Nguyễn Nhàn",
    time: "Th4 24, 2016",
    genres: ["Javascript", "Lập trình", "React"],
    rate: 5.0,
    content: "Có thể nói, khái niệm component trong React là một trong những thành phần quan trọng nhất của..."
  }
]
const styles = {
  body: {
    backgroundColor: "#EBEEF3",
    display: "flex"
  }
}
function App() {
  return (
    <div style={styles.body}>
      <Left posts={posts}></Left>
      <Right></Right>
    </div>
  );
}

export default App;
