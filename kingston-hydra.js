//kingston hydra
shape(3).out(o0)
noise(1,1,1).pixelate(20,20).blend(o0).out(o1)
render(o1)
