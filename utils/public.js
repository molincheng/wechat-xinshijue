var common = {
  getMyDate:function (tiemstamp,formats) {
    formats = formats || '-'
    let d = new Date(tiemstamp*1000)
    let year = d.getFullYear()
    let mouth = d.getMonth()+1>10?d.getMonth()+1:'0'+(d.getMonth()+1)
    let day = d.getDate()>10?d.getDate():'0'+d.getDate()

    return `${year}${formats}${mouth}${formats}${day}`
  }
}

module.exports = common