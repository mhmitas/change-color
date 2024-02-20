// const colors = ["#4d001f", "#808080", "#F5F5DC", "#000000", "#87CEEB", "#001F3F", "#4169E1", "#008080", "#40E0D0", "#BFFF00", "#228B22", "#808000", "#98FF98", "#7FFF00", "#FFFFE0", "#D2B48C", "#FFD700", "#FFFF00", "#FFD369", "#FFE5B4", "#FF7F50", "#F28080", "#CC7750", "#704214", "#FFC0CB", "#FF00FF", "#C02942", "#800000", "#800020", "#E6E6FA", "#EE82EE", "#610023", "#8E388E", "#D4B6D8", "#F6D3CF", "#FF00FF", "#FA8072", "#FFDAB9", "#DE5D83", "#006B75", "#B2C2B4", "#80ff80", "#556B2F", "#DFFF00", "#87CEFA", "#0041C2", "#40E0D0", "#CCCCFF", "#4B0082"
// ]


const colors2 = ['#7adbf0', '#ffa9f1', '#ffbe5c', '#ffe782', '#fcfdb5', '#b2abf1', '#75b3ff', '#1fadeb', '#fb9cf1', '#2be1f2', '#8ebec4', '#fce5cd', '#fbcaa4', '#f15152', '#5e3859', '#ffc5bd', '#ffb7af', '#f6a7a8', '#bd9dad', '#9f9eb5', '#ff3b58', '#ff4e68', '#ff6279', '#ff758a', '#ff899a', '#ff9dab', '#ffb0bc', '#ffc4cc', '#1c9e48', '#32a75a', '#49b16c', '#60bb7e', '#76c491', '#8dcea3', '#a4d8b5', '#1c4966', '#325b75', '#496d84', '#607f93', '#7691a3', '#8da4b2', '#a4b6c1', '#FFF78A', '#FFE382', '#FFC47E', '#FFAD84', '#B70404', '#DB005B', '#F79327', '#FFE569', '#40A2E3', '#FFF6E9', '#BBE2EC', '#0D9276']

document.getElementById('color-btn').addEventListener('click', function () {
    let random = randomIndex()
    let randomNav = navIndex()
    console.log(random);
    const hero = document.getElementById('hero')
    hero.style.backgroundColor = colors2[random];
    const nav = document.getElementById('nav')
    nav.style.backgroundColor = colors2[randomNav];
})



function randomIndex() {
    const length = colors2.length
    const num = parseInt(Math.random() * length)
    return num;
}
function navIndex() {
    const length = colors2.length
    const num = parseInt(Math.random() * (length-1))
    return num;
}