const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '103.173.227.250',
    user: 'hanha',
    password: 'Nha190605',
    database: 'codegpt'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Kết nối thất bại:', err.message);
    } else {
        console.log('✅ Kết nối thành công!');
    }
    connection.end(); // Đóng kết nối sau khi kiểm tra
});
