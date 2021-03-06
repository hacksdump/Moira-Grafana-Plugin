import { PanelPlugin } from '@grafana/ui';

import { MoiraPanel } from './components/MoiraPanel';
import { MoiraPanelEditor } from './components/MoiraPanelEditor';

import { defaults, MoiraOptions } from './types';

import './index.scss';

export const plugin = new PanelPlugin<MoiraOptions>(MoiraPanel);
plugin.setEditor(MoiraPanelEditor);
plugin.setDefaults(defaults);
