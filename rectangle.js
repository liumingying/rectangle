$(function(){
    //css选择器！！！
    //get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimiter = $('#perimiter'),
        $area = $('#area');

    /*calc button click event */
    $btnCal.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = 2 *(w+h),
        a = w * h;
        //output
        $perimiter.val(roundFractional(p,2));
        $area.val(roundFractional(a,2));
    });
});
/**
 * 解决浮点舍入误差的问题
 * 小数点后面保留第 n 位
 *
 * @param x 做近似处理的数
 * @param n 小数点后第 n 位
 * @returns 近似处理后的数 
 */
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }