var chartDom = document.getElementById('pad-3');
var myChart = echarts.init(chartDom);
var option;

option = {
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            color: ['#F7D142'], //内圆颜色
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'], //设置圆的位置，两个圆的位置必须一致
            data: [
                {
                    value: 100,
                    itemStyle: {
                        borderWidth: '0' // 设置内圆的描边宽度为0
                    }
                } //只设置一个值占整圆
            ],
            emphasis: {
                scale: false //鼠标悬停到内圆时，取消放大效果
            },
            animation: false, // 禁用内圆的动画效果
            label: {
                show: true,
                normal: {
                    position: 'center',
                    formatter: function (data) {
                        // 设置圆饼图中间文字排版
                        return 75;
                    },
                    textStyle: {
                        fontSize: 50,
                        color: 'white',
                    }
                }
            }
        },
        {
            type: 'pie',
            radius: ['50%', '60%'],
            labelLine: {
                show: false
            },
            animation: true,
            startAngle: 90,
            clockwise: true,
            data: [
                {
                    value: 75,
                    itemStyle: {
                        color: '#2065F7',
                        borderColor: 'black', // 设置外圆的边框颜色与背景颜色一致，使其消失
                        borderWidth: '2' // 设置外圆的描边宽度为0
                    }
                },
                {
                    value: 25,
                    itemStyle: {
                        color: 'white',
                        borderColor: 'white', // 设置外圆的边框颜色与背景颜色一致，使其消失
                        borderWidth: '0'// 设置外圆的描边宽度为0
                    }
                }
            ]
        }
    ]
};

option && myChart.setOption(option);
window.onresize = function () {
    myChart.resize();
    //myChart1.resize();    //若有多个图表变动，可多写

}
