<template>
  <canvas ref="canvas" :width="width" :height="height" class="captcha-canvas" @click="refreshCaptcha"></canvas>
</template>

<script>
export default {
  name: 'CaptchaCanvas',
  props: {
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 40,
    },
    length: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      code: '',
    }
  },
  computed: {
    isDark() {
      return document.documentElement.getAttribute('data-theme') === 'dark'
    },
  },
  mounted() {
    this.refreshCaptcha()
  },
  methods: {
    refreshCaptcha() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
      let code = ''
      for (let i = 0; i < this.length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      this.code = code
      this.$emit('change', code)
      this.$nextTick(() => {
        this.draw(code)
      })
    },
    draw(code) {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const { width, height } = this

      // Background
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      if (isDark) {
        ctx.fillStyle = `rgb(${this.rand(20, 40)}, ${this.rand(20, 40)}, ${this.rand(30, 50)})`
      } else {
        ctx.fillStyle = `rgb(${this.rand(220, 240)}, ${this.rand(220, 240)}, ${this.rand(230, 250)})`
      }
      ctx.fillRect(0, 0, width, height)

      // Interference lines
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randColor(isDark ? 60 : 150, isDark ? 120 : 210)
        ctx.beginPath()
        ctx.moveTo(this.rand(0, width), this.rand(0, height))
        ctx.lineTo(this.rand(0, width), this.rand(0, height))
        ctx.stroke()
      }

      // Interference dots
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = this.randColor(isDark ? 60 : 150, isDark ? 140 : 220)
        ctx.beginPath()
        ctx.arc(this.rand(0, width), this.rand(0, height), 1, 0, 2 * Math.PI)
        ctx.fill()
      }

      // Draw characters
      const charWidth = width / (this.length + 1)
      for (let i = 0; i < code.length; i++) {
        ctx.save()
        const x = charWidth * (i + 0.5)
        const y = height / 2
        const fontSize = this.rand(20, 28)
        ctx.font = `${fontSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = isDark
          ? `rgb(${this.rand(160, 255)}, ${this.rand(160, 255)}, ${this.rand(160, 255)})`
          : `rgb(${this.rand(20, 100)}, ${this.rand(20, 100)}, ${this.rand(20, 100)})`
        const angle = (this.rand(-15, 15) * Math.PI) / 180
        ctx.translate(x, y)
        ctx.rotate(angle)
        ctx.fillText(code[i], 0, 0)
        ctx.restore()
      }
    },
    rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    randColor(min, max) {
      return `rgb(${this.rand(min, max)}, ${this.rand(min, max)}, ${this.rand(min, max)})`
    },
  },
}
</script>

<style scoped>
.captcha-canvas {
  cursor: pointer;
  border-radius: 6px;
  vertical-align: middle;
}
</style>
