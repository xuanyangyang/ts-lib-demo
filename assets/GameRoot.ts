import {_decorator, Component} from 'cc';
import {TSObject1, TSObject2, TSObject3, TSObject4, TSObject5} from "ts-demo";

const {ccclass, property} = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
        console.log(TSObject1);
        console.log(TSObject2);
        console.log(TSObject3);
        console.log(TSObject4);
        console.log(TSObject5);
        let t1 = new TSObject1("1");
        console.log(t1);
        let t2 = new TSObject2(2);
        console.log(t2);
        let t3 = new TSObject3(t1, t2);
        console.log(t3);
        let t4 = new TSObject4(4, "4");
        console.log(t4);
        let t5 = new TSObject5(t1);
        console.log(t5);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
