import React, { Component } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

import pluginBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';
import pluginExport from 'grapesjs-plugin-export';
import pluginAviary from 'grapesjs-aviary';
import pluginFilestack from 'grapesjs-plugin-filestack';

import commands from '../components/UI/form_components/commands';
import blocks from '../components/UI/form_components/blocks';
import components from '../components/UI/form_components/components';
import panels from '../components/UI/form_components/panels';
import styles from '../components/UI/form_components/styles';

// TODO: Make components for evaulation creator (with editable feilds, then export them to json formatt for the database)
// TODO: Add drag and drop as well as ADD/ REMOVE functionality for each component
// TODO: Export finish evaluation to database

const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: { type: null },
    // Avoid any default panel
    panels: { defaults: [] },
  });

  export default grapesjs.plugins.add('gjs-preset-webpage', (editor, opts = {}) => {
    let config = opts;
  
    let defaults = {
      // Which blocks to add
      blocks: ['link-block', 'quote', 'text-basic'],
  
      // Modal import title
      modalImportTitle: 'Import',
  
      // Modal import button text
      modalImportButton: 'Import',
  
      // Import description inside import modal
      modalImportLabel: '',
  
      // Default content to setup on import model open.
      // Could also be a function with a dynamic content return (must be a string)
      // eg. modalImportContent: editor => editor.getHtml(),
      modalImportContent: '',
  
      // Code viewer (eg. CodeMirror) options
      importViewerOptions: {},
  
      // Confirm text before cleaning the canvas
      textCleanCanvas: 'Are you sure to clean the canvas?',
  
      // Show the Style Manager on component change
      showStylesOnChange: 1,
  
      // Text for General sector in Style Manager
      textGeneral: 'General',
  
      // Text for Layout sector in Style Manager
      textLayout: 'Layout',
  
      // Text for Typography sector in Style Manager
      textTypography: 'Typography',
  
      // Text for Decorations sector in Style Manager
      textDecorations: 'Decorations',
  
      // Text for Extra sector in Style Manager
      textExtra: 'Extra',
  
      // Use custom set of sectors for the Style Manager
      customStyleManager: [],
  
      // `grapesjs-blocks-basic` plugin options
      // By setting this option to `false` will avoid loading the plugin
      blocksBasicOpts: {},
  
      // `grapesjs-navbar` plugin options
      // By setting this option to `false` will avoid loading the plugin
      navbarOpts: {},
  
      // `grapesjs-component-countdown` plugin options
      // By setting this option to `false` will avoid loading the plugin
      countdownOpts: {},
  
      // `grapesjs-plugin-forms` plugin options
      // By setting this option to `false` will avoid loading the plugin
      formsOpts: {},
  
      // `grapesjs-plugin-export` plugin options
      // By setting this option to `false` will avoid loading the plugin
      exportOpts: {},
  
      // `grapesjs-aviary` plugin options, disabled by default
      // Aviary library should be included manually
      // By setting this option to `false` will avoid loading the plugin
      aviaryOpts: 0,
  
      // `grapesjs-plugin-filestack` plugin options, disabled by default
      // Filestack library should be included manually
      // By setting this option to `false` will avoid loading the plugin
      filestackOpts: 0,
    };

    // Load defaults
    for (let name in defaults) {
      if (!(name in config))
        config[name] = defaults[name];
    }
  
    const {
        blocksBasicOpts,
        navbarOpts,
        countdownOpts,
        formsOpts,
        exportOpts,
        aviaryOpts,
        filestackOpts
      } = config;  
  
    // Load plugins
    blocksBasicOpts && pluginBlocks(editor, blocksBasicOpts);
    navbarOpts && pluginNavbar(editor, navbarOpts);
    countdownOpts && pluginCountdown(editor, countdownOpts);
    formsOpts && pluginForms(editor, formsOpts);
    exportOpts && pluginExport(editor, exportOpts);
    aviaryOpts && pluginAviary(editor, aviaryOpts);
    filestackOpts && pluginFilestack(editor, filestackOpts);
  
    // Load components
    components(editor, config);
  
    // Load blocks
    blocks(editor, config);
  
    // Load commands
    commands(editor, config);
  
    // Load panels
    panels(editor, config);
  
    // Load styles
    styles(editor, config);
  
  });

  
/*class Patient_Eval_Maker extends Component{
    
    render(){
        return(
            
            <div className="Patient_Eval_Maker">
                <div id="gjs">
                    <h1>Hello World Component!</h1>
                    <script type="text/javascript">
                    </script>
                </div>
            </div>
            
        );
    }
}*/
//export default Patient_Eval_Maker;

/*Currently working on:
	-Making an abstract component for creating forms for patient evaluation tests

	WILL NEED (in form): PHQ maker
		-Tables that contain rows/columns of 'components'
		-Text input boxes
		-grouped check boxes (can only select from one of X check boxes)
		-check boxes (multiple choice)
		-Date input
		-requirement flag for all above (marked with red asterisks

	General document creator/editor for medication details (effects, studies, stats)*/