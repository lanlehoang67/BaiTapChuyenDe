import React from 'react'
import Button from '../../Button/Button'
const styles = {
    main: {
        display: 'block',
        border: 'none',
        backgroundColor: '#F47555',
        width: '450px',
        margin: 'auto',
        marginTop: '86px',
        textAlign: 'center'
    },
}
function RegisterBox() {
    return (
        <div className="register-box" style={styles.main}>
            <h3>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h3>
            <span>Công nghệ đang thay đổi nhanh chóng, hãy cùng vươn ra thế giới với những bài viết chất lượng từ
                Fullstack Station bạn nha
            </span>
            <Button backgroundColor="#D56144"></Button>
        </div>
    )
}

export default RegisterBox
