const Router = require('express');
const router = Router();

router.get('/test', (req, res) =>{
    const data = {
        "name" : "Luis",
        "github" : "https://github.com/LuisCedilloGz"
    };
    res.json(data);
})

module.exports = router;
  