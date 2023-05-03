import type { MenuAction } from 'features/ribbon/services';

export type RibbonContextMenuActionProps = {
	action: MenuAction;

	onSelect(action: MenuAction): void;
};
