'use strict';

$(function () {
  theaMsForm($('.sign-in'));

  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  /*
  clickEle: 鼠标点击或者移入的元素，
  aimEle: 目标元素，
  className: 类名，
  detail: 图片或者详情
  */
  function tabHandle(clickEle, aimEle, className, detail) {
    $(clickEle).each(function (index) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(aimEle)[index]).addClass(className).siblings().removeClass(className);
        $(detail).show();
      });
      $(detail).mouseleave(function () {
        $(this).hide();
      });
    });
  }

  // 解读
  tabHandle('.jd .tab-head li', '.jd .jd-item', 'cur', null);
  // 联考
  tabHandle('.gct-cont li', null, 'cur', null);
  // 英语
  tabHandle('.en .look-picture', null, 'cur', '.en .text-img');
  // 购课
  tabHandle('.buy-class .cont li', null, 'cur', null);
  // 全程班 查看详情
  tabHandle('.whole .yh-item .look', '.whole .yh-item', 'cur', null);

  /*
  closeEle: 关闭按钮，
  aimEle: 目标元素，
  grandfatherEle: 目标的祖父元素，
  className: 类名
  */
  function closeHandle(closeEle, aimEle, grandfatherEle, className) {
    $(closeEle).click(function () {
      if (grandfatherEle) {
        $(this).parent().parent(grandfatherEle).removeClass(className);
      } else {
        $(this).parent(aimEle).hide();
      }
    });
  }

  // 右悬浮
  closeHandle('.right-fixed .close', '.right-fixed', null, null);
  // 购课
  closeHandle('.buy-class .detail-close', null, '.buy-class .cont li', 'cur');
  // 预约试听弹窗
  closeHandle('.appoint-popup .close', '.appoint-popup', null, null);
  // 全程班
  closeHandle('.yh-item .detail-close', null, '.whole .yh-item', 'cur');

  // 显示 预约试听弹窗
  $('.appoint-popup-btn').click(function () {
    $('.appoint-popup').show();
  });

  // 返回顶部
  $(".to-top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
  });
});