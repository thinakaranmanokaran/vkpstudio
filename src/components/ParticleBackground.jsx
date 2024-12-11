import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Load tsparticles full package
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // Cover the full screen
        background: {
          color: "#0d47a1", // Dark blue background
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800, // Adjust density
            },
          },
          color: {
            value: ["#ffffff", "#ffcc00", "#ff0000"], // Multi-color particles
          },
          shape: {
            type: "circle", // Shape of particles
            stroke: {
              width: 0,
              color: "#ffffff",
            },
          },
          opacity: {
            value: 0.8, // Slight transparency
            random: true,
          },
          size: {
            value: 5, // Particle size
            random: true, // Random sizes
          },
          move: {
            enable: true,
            speed: 3, // Movement speed
            direction: "none", // Free movement
            random: false,
            straight: false,
            out_mode: "bounce", // Bounce at edges
          },
          line_linked: {
            enable: true, // Link particles with lines
            distance: 150,
            color: "#ffffff", // Line color
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          detect_on: "canvas", // Interaction on the canvas
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Repulse particles on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distance for repulsion
              duration: 0.4, // Effect duration
            },
            push: {
              particles_nb: 4, // Number of particles added on click
            },
            grab: {
              distance: 200, // Grab effect on hover
              line_linked: {
                opacity: 0.7,
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
