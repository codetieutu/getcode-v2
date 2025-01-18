const formatData = (mails) => {
    return mails.map(mail => {
        const date = new Date(mail.time);
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        return {
            id: mail.id,
            email: mail.email,
            time: formattedDate
        };
    });
};

module.exports = formatData;
