# san-transition

## 安装

    npm：npm install --save san-transition
    yarn：yarn add san-transition
    或者使用cdn：<script src="//unpkg.com/san-transition"></script>

## 使用方法

    使用方法官方给出了三个小示例，分别适用于组件根元素，组件的某个子元素以及多个元素动
    画的场景。通过比较三个例子可以看出transition是一个有两个参数的函数，通过改变元素的
    类名达到动画效果，动画从开始到结束一共有四个类名name-before-enter,name-enter，name-before-leave,name-leave。name即transition的第一个参数，类型为字符串，第二个参
    数是多个动画时需要的参数，表示每个动画之间的间隔时间，类型为Number，单位ms。

* name-before-enter：在DOM树生成时生效，在动画下一帧移除，
* name-enter：在name-before-enter移除之后下一帧动画开始之前生效，动画结束移除
* name-before-leave：在离开动画开始的时候生效，下一帧动画移除
* name-leave：在name-before-leave移除后下一帧动画开始之前生效，动画结束移除