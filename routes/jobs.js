var express = require('express');
var router = express.Router();
var job_dal = require('../dal/job_dal');

/* GET job page. */
router.get('/all', function(req, res, next) {
    job_dal.getAll(function (err, result) {
        if(err){
                console.log(err);
                res.send(err);
        } else {
            console.log(result);
            res.render('jobs/jobs_view_all');
        }
    })
});

module.exports = router;