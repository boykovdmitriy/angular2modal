/**
 * Created by Boykov D. on 1/3/2017.
 */

export class TinyNotificationModel {
	public header: string;
	public description: string;

	constructor(header: string, description: string) {
		this.header      = header;
		this.description = description;
	}
}