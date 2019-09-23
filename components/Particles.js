import React from "react"
import Particles from "react-particles-js"

export default ({ className }) => (
	<Particles
		className={className}
		params={{
			particles: {
				number: {
					value: 160,
					density: {
						enable: false,
					},
				},
				size: {
					value: 3,
					random: true,
					anim: {
						speed: 4,
						size_min: 0.3,
					},
				},
				line_linked: {
					enable: false,
				},
				move: {
					random: true,
					speed: 1,
					direction: "top",
					out_mode: "out",
				},
				color: {
					value: "#1e90ff",
				},
			},
		}}
	/>
)
