export const particlesConfig = {
  particles: {
    number: {
      value: 15,
    },
    color: {
      value: 'random',
    },
    shape: {
      type: ['star', 'image'],
      stroke: {
        width: 0,
        color: 'yellow',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'https://neveryu.github.io/avatar/avatar.png',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ccc',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'random',
      random: true,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    // "detect_on": "canvas",
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        // "mode": "repulse"
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'repulse',
        // "mode": "push"
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
}
