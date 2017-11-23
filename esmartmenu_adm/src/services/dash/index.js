module.exports = (req, res) => {
    return res.render('dash/index', {
        title: 'Admin E-Smartmenu',
        layout: 'layouts/main',
        user: req.user || undefined
    })
}
