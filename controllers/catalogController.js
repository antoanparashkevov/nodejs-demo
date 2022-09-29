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
module.exports = {
    catalogPage
}