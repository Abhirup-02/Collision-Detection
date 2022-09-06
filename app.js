const c = document.querySelector('canvas')
const ctx = c.getContext('2d')

c.width = innerWidth
c.height = innerHeight

const mouse = {
    x: 20,
    y: 20
}

addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

let ani
function animate() {
    ani = requestAnimationFrame(animate)

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, innerWidth, innerHeight)

    if ((mouse.x + 100 >= innerWidth / 2 - 50) && (mouse.y + 100 >= innerHeight / 2 - 50) && (mouse.x <= innerWidth / 2 +50) && (mouse.y <= innerHeight / 2 +50)) {
        console.log('Collided')
        cancelAnimationFrame(ani)
    }

    //Blue rectangle
    ctx.fillStyle = 'blue'
    ctx.fillRect(c.width / 2 - 50, c.height / 2 - 50, 100, 100)

    //Red rectangle
    ctx.fillStyle = 'red'
    ctx.fillRect(mouse.x, mouse.y, 100, 100)

}
animate()

