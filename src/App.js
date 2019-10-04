import React from 'react';
import logo from './logo.svg';
import './App.css';
import ai1 from './images/ai.jpeg'
import ai2 from './images/ai6.jpg'
import ai3 from './images/ai3.jpg'
import ai4 from './images/ai4.jpg'
import ai5 from './images/ai5.jpg'
import icon1 from './images/icon1.jpg'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.jpg'
import icon4 from './images/icon4.jpg'
import icon5 from './images/icon5.png'
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
const newPosts = [
  {
    title: "Hãy sẵn sàng với serverless",
    src: icon1,
    time: "Th11 28, 2018",
    genres: ["Công nghệ", "Hệ điều hành", "Máy chủ web", "Môi trường phát triển"]
  },
  {
    title: "Fullstack station chuyển tên miền từ Business Card",
    src: icon2,
    time: "Th6 4, 2018",
    genres: ["Giao lưu"]
  },
  {
    title: "Áp dụng các chiêu thức võ học vào lập trình",
    src: icon3,
    time: "Th4 10, 2018",
    genres: ["Lập trình"]
  },
  {
    title: "Kinh nghiệm dành cho người mới bắt đầu lập trình Python",
    src: icon4,
    time: "Th3 16, 2018",
    genres: ["Lập trình", "Môi trường phát triển", "Python"]
  },
  {
    title: "Hướng dẫn tạo Graphql Server một cách dễ dàng - Phần 1",
    src: icon5,
    time: "Th11 28, 2017",
    genres: ["Công nghệ", "Graphql", "Nodejs"]
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
      <Right newPosts={newPosts}></Right>
    </div>
  );
}

export default App;
