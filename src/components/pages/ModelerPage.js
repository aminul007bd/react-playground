import React from 'react'
// import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js'
// import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-font/dist/css/bpmn-embedded.css'
import { emptyBpmn } from '../assets/empty.bpmn'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'

export default class ModelerPage extends React.Component {
	modeler = null

	componentDidMount = () => {
		this.modeler = new BpmnModeler({
			container: '#bpmnview',
			keyboard: {
				bindTo: window
			},
			propertiesPanel: {
				parent: '#propview'
			},
			additionalModules: [propertiesPanelModule, propertiesProviderModule],
			moddleExtensions: {
				camunda: camundaModdleDescriptor
			}
		})

		this.newBpmnDiagram()
	}

	newBpmnDiagram = () => {
		this.openBpmnDiagram(emptyBpmn)
	}

	openBpmnDiagram = (xml) => {
		this.modeler.importXML(xml, (error) => {
			if (error) {
				return console.log('fail import xml')
			}

			var canvas = this.modeler.get('canvas')

			canvas.zoom('fit-viewport')
		})
	}

	render = () => {
		return (
			<div id="bpmncontainer">
				<div
					id="propview"
					style={{
						width: '25%',
						height: '98vh',
						float: 'right',
						maxHeight: '98vh',
						overflowX: 'auto'
					}}
				></div>
				<div id="bpmnview" style={{ width: '75%', height: '98vh', float: 'left' }}></div>
			</div>
		)
	}
}
