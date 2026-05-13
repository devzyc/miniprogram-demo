import gsap from 'gsap'

Page({
  data: {
    w: 200,
    h: 200,
    btnText: "点击将矩形放大1.5倍",
    isBig: false // 标记当前状态
  },

  toggleScale() {
    const { isBig } = this.data
    const state = {
      w: this.data.w,
      h: this.data.h
    }

    // 放大状态：200 → 300
    if (!isBig) {
      gsap.to(state, {
        w: 300,
        h: 300,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          this.setData({
            w: state.w,
            h: state.h
          })
        },
        // 动画结束，状态永久改变
        onComplete: () => {
          this.setData({
            isBig: true,
            btnText: "点击将矩形还原回去"
          })
        }
      })
    }
    // 还原状态：300 → 200
    else {
      gsap.to(state, {
        w: 200,
        h: 200,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          this.setData({
            w: state.w,
            h: state.h
          })
        },
        // 动画结束，状态永久还原
        onComplete: () => {
          this.setData({
            isBig: false,
            btnText: "点击将矩形放大1.5倍"
          })
        }
      })
    }
  }
})