document.querySelector('.time').innerText = formatDate(new Date())


function formatDate(date){
    const day = (date.getDate()+'').padStart(2,'0')
    const month = (date.getMonth()+1+'').padStart(2,'0')
    const year = (date.getFullYear()+'').padStart(2,'0')
    const hour = (date.getHours()+'').padStart(2,'0')
    const minutes = (date.getMinutes()+'').padStart(2,'0')
    const seconds = (date.getSeconds()+'').padStart(2,'0')

    return `${hour}:${minutes}:${seconds} - ${day}.${month}.${year}`
}