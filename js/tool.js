/**
 * Created by Ace on 2017/7/18.
 */


function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}

function setStyle(obj,attr,val){
    obj.style[attr]=val;
}

function scroll(){
    if(document.body.scrollTop || document.body.scrollLeft){
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
    else{
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
}

function client(){
    if(document.body.clientWidth){
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }else{
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}