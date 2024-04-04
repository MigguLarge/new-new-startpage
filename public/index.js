const statuslineTime = document.querySelector(".statusline__time");

const getDate = () => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const dateObj = new Date();
    // let date = dateObj.getDate();
    // date = date > 9 ? `${date}` : `0${date}`
    const date =
        dateObj.getDate() > 9
            ? `${dateObj.getDate()}`
            : `0${dateObj.getDate()}`;
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear().toString().slice(2);

    const hour =
        dateObj.getHours() > 9
            ? `${dateObj.getHours()}`
            : `0${dateObj.getHours()}`;
    const minute =
        dateObj.getMinutes() > 9
            ? `${dateObj.getMinutes()}`
            : `0${dateObj.getMinutes()}`;
    return `${hour}:${minute} ${date}-${month}-${year}`;
};

statuslineTime.textContent = getDate();
setInterval(() => {
    statuslineTime.textContent = getDate();
}, 1000);
