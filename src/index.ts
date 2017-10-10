/**
 * index.ts
 * Created on 2017/月/09
 *
 * Author:
 *      "SONIC3D <sonic3d@gmail.com>"
 *
 * Copyright (c) 2017 "SONIC3D <sonic3d@gmail.com>"
 */

import * as shell from "shelljs";
import {Readable} from "stream";
import notify = require('osx-notifier');

let checkIntervalInSecond = 60;
let stop: boolean = false;

function mainProc(): void {
    let retStr: string | Readable = shell.exec("whois example.com | grep \"Updated Date:\"", {silent: true}).stdout;
    console.log(retStr);

    if (retStr.toString().indexOf("Updated Date") == -1) {
        notify({
            type: 'fail',
            title: '没有找到Update时间',
            subtitle: 'Task completed',
            message: '没有找到Update时间',
            group: 'taskdoer',
        });
        console.log("注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        console.log("注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        console.log("注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        stop = true;
    } else if (retStr.toString().indexOf("Updated Date: 2017-10-03") == -1) {
        notify({
            type: 'fail',
            title: 'Update时间变化',
            subtitle: 'Task completed',
            message: 'Update时间变化',
            group: 'taskdoer',
        });
        console.log("!!!注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        console.log("!!!注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        console.log("!!!注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意");
        stop = true;
    } else {
        notify({
            type: 'info',
            title: '没啥事，一切正常',
            subtitle: 'Task completed',
            message: '没啥事，一切正常',
            group: 'taskdoer',
        });
    }
    if (!stop) {
        setTimeout(mainProc, checkIntervalInSecond * 1000);
    }
}

mainProc();
