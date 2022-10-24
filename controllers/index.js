const { Router } = require('express');

const express = require('express').Router();

router.get ("/index", (req, res) => {
res.json("HEWWO");
});

module.exports = router;