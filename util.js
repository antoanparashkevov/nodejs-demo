function html(body, title = 'Demo site') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<title> 
    ${title}
</title>
</head>
<body>
<nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/catalog">Catalog</a></li>
            </ul>
</nav>
     ${body}
</body>
</html>`

}
const data = [
    {
        id:'001',
        name: 'Bag',
        color: 'Black'
    },
    {
        id:'002',
        name: 'Pencil',
        color: 'Yellow'
    }
]

module.exports = {
    html,
    data
}