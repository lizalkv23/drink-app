// canvasAnim.js

// const canvasAnim = (() => {
//     const cnv = document.querySelector('canvas')
//     const ctx = cnv.getContext('2d')
//     const cfg = {
//         orbsCount: 400,
//         minVelocity: 0.2,
//         ringsCount: 10
//     }

//     let mx = 0,
//         my = 0

//     cnv.addEventListener(`mousemove`, (e) => {
//         mx = e.clientX - cnv.getBoundingClientRect().left
        // my = e.clientY - cnv.getBoundingClientRect().top
//     })

//     let cw, ch, cx, cy, ph, pw

//     function resize() {
//         cw = cnv.width = window.innerWidth
//         ch = cnv.height = window.innerHeight
//         cx = cw * 0.5
//         cy = ch * 0.5
//         ph = cy * 0.4
//         pw = cx * 0.4
//     }

//     resize()

//     window.addEventListener('resize', () => {
//         resize()
//         loop() // Перерисовываем содержимое canvas после изменения размера
//     })

//     class Ord {
//         constructor() {
//             this.size = Math.random() * 5 + 2
//             this.angle = Math.random() * 360
//             this.radius = (((Math.random() * cfg.ringsCount) | 0) * ph) / cfg.ringsCount
//             this.impact = this.radius / ph
//             this.velocity = cfg.minVelocity + Math.random() * cfg.minVelocity
//         }

//         refresh() {
//             let radian = (this.angle * Math.PI) / 180
//             let cos = Math.cos(radian)
//             let sin = Math.sin(radian)

//             let offsetX = cos * pw * this.impact
//             let offsetY = sin * pw * this.impact

//             let parallaxX = (mx / cw) * 2 - 1
//             let parallaxY = my / ch

//             let x = cx + cos * (ph + this.radius) + offsetX
//             let y = cy + sin * (ph + this.radius) - offsetY * parallaxY - parallaxX * offsetX

//             let distToC = Math.hypot(x - cx, y - cy)
//             let distToM = Math.hypot(x - mx, y - my)

//             let optic = sin * this.size * this.impact * 0.7
//             let mEffect = distToM <= 50 ? (1 - distToM / 50) * 25 : 0
//             let size = this.size + optic + mEffect

//             let h = this.angle
//             let s = 100
//             let l = (1 - Math.sin(this.impact * Math.PI)) * 90 + 10
//             let color = `hsl(${h}, ${s}%, ${l}% )`

//             if (distToC > ph - 1 || sin > 0) {
//                 ctx.strokeStyle = ctx.fillStyle = color
//                 ctx.beginPath()
//                 ctx.arc(x, y, size, 0, 2 * Math.PI)
//                 distToM <= 50 ? ctx.stroke() : ctx.fill()
//             }
//             this.angle = (this.angle - this.velocity) % 360
//         }
//     }

//     let orbsList = []

//     function createStarDust() {
//         for (let i = 0; i < cfg.orbsCount; i++) {
//             orbsList.push(new Ord())
//         }
//     }

//     createStarDust()

//     function loop() {
//         requestAnimationFrame(loop)

//         let bg1 = ctx.createLinearGradient(cx, cy, 0, cx, cy, cx)
//         bg1.addColorStop(0, `rgb(21,22,20, 0.8)`)
//         bg1.addColorStop(0.7, `rgb(82,10,74, 0.94)`)
//         bg1.addColorStop(1, `rgb(30,10,50)`)

//         ctx.globalCompositeOperation = `normal`
//         ctx.fillStyle = bg1
//         ctx.fillRect(0, 0, cw, ch)
//         ctx.globalCompositeOperation = `lighter`
//         orbsList.map((e) => e.refresh())
//     }

//     loop()
// })()




















// const canvasAnim = (() => {
    // const canvas = document.querySelector('canvas')
    // const c = canvas.getContext('2d')

    // canvas.width = innerWidth
    // canvas.height = innerHeight

    // const mouse = {
    //     x: innerWidth / 2,
    //     y: innerHeight / 2
    // }

    // const colors = ['#baff39', '#7ECEFD', '#FFF6E5', '#00dd00']

    // let mouseDown = false
    // addEventListener('mousedown', () => {
    //     mouseDown = true
    // })

    // addEventListener('mouseup', () => {
    //     mouseDown = false
    // })

    // addEventListener('resize', () => {
    //     canvas.width = innerWidth
    //     canvas.height = innerHeight

    //     init()
    // })

    // // Objects
    // class Particle {
    //     constructor(x, y, radius, color) {
    //         this.x = x
    //         this.y = y
    //         this.radius = radius
    //         this.color = color
    //     }

    //     draw() {
    //         c.beginPath()
    //         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //         c.shadowColor = this.color
    //         c.shadowBlur = 15
    //         c.fillStyle = this.color
    //         c.fill()
    //         c.closePath()
    //     }

    //     update() {
    //         this.draw()
    //     }
    // }

    // // Implementation
    // let particles
    // function init() {
    //     particles = []

    //     for (let i = 0; i < 1500; i++) {
    //         const canvasWidth = canvas.width + 1000
    //         const canvasHeight = canvas.height + 2000

    //         const x = Math.random() * canvasWidth - canvasWidth / 2
    //         const y = Math.random() * canvasHeight - canvasHeight / 2
    //         const radius = 2 * Math.random()

    //         const color = colors[Math.floor(Math.random() * colors.length)]
    //         particles.push(new Particle(x, y, radius, color))
    //     }
    // }

    // // Animation Loop
    // let radians = 0
    // let alpha = 1
    // function animate() {
    //     requestAnimationFrame(animate)
    //     c.fillStyle = `rgba(10, 10, 10, ${alpha})`
    //     c.fillRect(0, 0, canvas.width, canvas.height)

    //     c.save()
    //     c.translate(canvas.width / 2, canvas.height / 2)
    //     c.rotate(radians)
    //     particles.forEach((particle) => {
    //         particle.update()
    //     })
    //     c.restore()

    //     radians += 0.003

    //     if (mouseDown && alpha >= 0.03) {
    //         alpha -= 0.01
    //     } else if (!mouseDown && alpha < 1) {
    //         alpha += 0.01
    //     }
    // }

    // init()
    // animate()

//     window.onload = function () {
//         const canvas = document.getElementById('myCanvas')
//         const ctx = canvas.getContext('2d')

//         canvas.width = window.innerWidth
//         canvas.height = window.innerHeight

//         const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
//         console.log('loaded')
//     }

//     const mouse = {
//         x: 0,
//         y: 0
//     }

//     window.addEventListener('mousemove', function (e) {
//         mouse.x = e.x
//         mouse.y = e.y
//     })

//     class FlowFieldEffect {
//         #ctx
//         #width
//         #height
//         #count
//         #radius
//         constructor(ctx, width, height, gradient) {
//             this.#ctx = ctx
//             this.#ctx.lineWidth = 0.3
//             this.#width = width
//             this.#height = height
//             this.gradient
//             this.#createGradient()
//             this.#ctx.strokeStyle = this.gradient
//             this.#radius = 1.9
//             this.vr = 0.03
//             this.#mapField()
//             this.timer = 0
//             this.cellSize = 10
//             this.interval = 1000 / 60
//             this.timer = 0
//             this.lastTime = 0
//         }
//         #createGradient() {
//             this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height)
//             this.gradient.addColorStop('0.1', '#ff5c33')
//             this.gradient.addColorStop('0.2', '#ff66b3')
//             this.gradient.addColorStop('0.4', '#ccccff')
//             this.gradient.addColorStop('0.6', '#b3ffff')
//             this.gradient.addColorStop('0.8', '#80ff80')
//             this.gradient.addColorStop('0.9', '#ffff33')
//         }
//         #mapField(timeStamp) {
//             let deltaTime = timeStamp - this.lastTime
//             this.lastTime = timeStamp

//             if (this.timer > this.interval) {
//                 this.#ctx.clearRect(0, 0, this.#width, this.#height)
//                 this.#radius += this.vr
//                 if (this.#radius > 5 || this.#radius < -5) this.vr *= -1
//                 for (let y = 0; y < this.#height; y += this.cellSize) {
//                     for (let x = 0; x < this.#width; x += this.cellSize) {
//                         const angle = this.#getValue(x, y)
//                         this.#draw(angle, x, y)
//                     }
//                 }
//                 this.timer = 0
//             } else {
//                 this.timer += deltaTime
//             }

//             requestAnimationFrame(this.#mapField.bind(this))
//         }
//         #getValue(x, y) {
//             return (Math.cos((mouse.y / 3) * x * 0.00005) + Math.sin((mouse.x / 3) * y * 0.00005)) * this.#radius
//         }
//         #draw(angle, x, y) {
//             let positionX = x
//             let positionY = y
//             let dx = mouse.x - positionX
//             let dy = mouse.y - positionY
//             let distance = dx * dx + dy * dy
//             let length = distance > 150000 ? distance : 150000
//             if (length > 900000) length = 900000
//             this.#ctx.beginPath()
//             this.#ctx.moveTo(positionX, positionY)
//             this.#ctx.lineTo(
//                 positionX + (Math.cos(angle) * length) / 10000,
//                 positionY + (Math.sin(angle) * length) / 10000
//             )

//             this.#ctx.stroke()
//         }
//     }
// })()
// export default canvasAnim
