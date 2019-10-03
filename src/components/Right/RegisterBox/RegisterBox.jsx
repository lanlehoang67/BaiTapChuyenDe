import React from 'react'
import Button from '../../Button/Button'
const styles = {
    main: {
        display: 'block',
        position: 'relative',
        border: 'none',
        backgroundColor: '#F47555',
        width: '450px',
        margin: '0 auto',
        marginTop: '33px',
        maxHeight: '800px',
        textAlign: 'center'
    },
    span: {
        display: 'inline-block',
        textAlign: 'center',
        maxWidth: '250px'
    },
    btnBox: {
        position: 'absolute',
        top: '223px',
        left: '86px',
    },
    checkBox: {
        float: 'left'
    },
    spanAccept: {
        display: 'inline-block',
        textAlign: 'center',
        maxWidth: '300px'
    },
    buttonTop: {
        width: "290px" ,
        display:"block" ,
        color: "white",
        backgroundColor: "#D56144",
        margin: '0 0 20px 0'
    },
    buttonBottom: {
        width: "290px" ,
        display:"block" ,
        color: "#F47555",
        backgroundColor: "white",
        margin: '30px 0'
    }
}
function RegisterBox() {
    return (
        <div className="register-box" style={styles.main}>
            <h3>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
            <span style={styles.span}>Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng từ
                Fullstack Station bạn nha
            </span>
            <div style={styles.btnBox}>
            <Button styles={styles.buttonTop}>TÊN CỦA BẠN</Button>
            <Button styles={styles.buttonTop}>EMAIL CỦA BẠN</Button>
            <input style={styles.checkBox} type="checkbox"/>
            <span style={styles.spanAccept}>I comment to my submitted data being collected via the form</span>
            <Button styles={styles.buttonBottom}>ĐĂNG KÝ</Button>
            <span style={styles.span}>Bạn sẽ nhận được email thông báo khi có bài viết mới, mình không spam vì mình cũng rất ghét :)</span>
            </div>
        </div>
    )
}

export default RegisterBox
