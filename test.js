const log = require("./logger");

log.error("Test");
log.error("Test2", 0);
log.error("Test3", 1);
log.error("Test4", false);
log.error("Test5", true);
log.completed("Test6");
log.info("Test7");
log.warn("Test8");