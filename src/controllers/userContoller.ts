export const userView = (req, res) => {
    res.send(`<a href="/user/login">Login click</a> ${req.params.id}`);
}
export const loginView = (req, res) => {
    res.send(`Login View`);
}

