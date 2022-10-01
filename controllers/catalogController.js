const {html,data} = require("../util.js");

function catalogPage(req,res) {
    res.write(html(
        `<h1>Welcome to catalog page</h1>
<ul>
${data.map(item=> `<li>${item.name} - ${item.color}</li>`).join('\n')}
</ul>
`, 'Home page'))
    res.end()
}

function createPage(req,res){
    res.write(html(
        `<h1> Create item</h1>
<form action="/create" method="post">
<div>
<label for="name">Name</label>
<input type="text" name="name">
</div>
<div>
<label for="color">Color</label>
<select name="color">
<option value="blue">Blue</option>
<option value="red">Red</option>
<option value="green">Green</option>
</select>
</div>
<div>
<input type='submit' value="Create">
</div>
</form>
`
    ))
    res.end();
}
module.exports = {
    catalogPage,
    createPage
}