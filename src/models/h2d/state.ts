/**
 * Full state of the H2D printer model
 */
export interface H2DState {
	"2D": {
		bs: {
			bi: any[];
			total_time: number;
		};
		cond: number;
		cur_stage: {
			clock_in_time: number;
			idx: number;
			left_time: number;
			process: number;
			state: number;
		};
		first_confirm: boolean;
		makeable: boolean;
		material: {
			cur_id_list: any[];
			state: number;
			tar_id: string;
			tar_name: string;
		};
	};
	"3D": {
		layer_num: number;
		total_layer_num: number;
	};
	ams: {
		ams: Array<{
			dry_time: number;
			humidity: string;
			humidity_raw: string;
			id: string;
			info: string;
			temp: string;
			tray: Array<{
				bed_temp: string;
				bed_temp_type: string;
				cali_idx: number;
				cols: string[];
				ctype: number;
				drying_temp: string;
				drying_time: string;
				id: string;
				nozzle_temp_max: string;
				nozzle_temp_min: string;
				remain: number;
				state: number;
				tag_uid: string;
				total_len: number;
				tray_color: string;
				tray_diameter: string;
				tray_id_name: string;
				tray_info_idx: string;
				tray_sub_brands: string;
				tray_type: string;
				tray_uuid: string;
				tray_weight: string;
				xcam_info: string;
			}>;
		}>;
		ams_exist_bits: string;
		ams_exist_bits_raw: string;
		cali_id: number;
		cali_stat: number;
		insert_flag: boolean;
		power_on_flag: boolean;
		tray_exist_bits: string;
		tray_is_bbl_bits: string;
		tray_now: string;
		tray_pre: string;
		tray_read_done_bits: string;
		tray_reading_bits: string;
		tray_tar: string;
		unbind_ams_stat: number;
		version: number;
	};
	ams_rfid_status: number;
	ams_status: number;
	ap_err: number;
	aux: string;
	aux_part_fan: boolean;
	batch_id: number;
	bed_target_temper: number;
	bed_temper: number;
	big_fan1_speed: string;
	big_fan2_speed: string;
	cali_version: number;
	canvas_id: number;
	care: Array<{
		id: string;
		info: string;
	}>;
	cfg: string;
	chamber_temper: number;
	command: string;
	cooling_fan_speed: string;
	ctt: number;
	design_id: string;
	device: {
		airduct: {
			modeCur: number;
			modeList: Array<{
				ctrl: number[];
				modeId: number;
				off: number[];
			}>;
			parts: Array<{
				func: number;
				id: number;
				range: number;
				state: number;
			}>;
		};
		bed: {
			info: {
				temp: number;
			};
			state: number;
		};
		bed_temp: number;
		cam: {
			laser: {
				cond: number;
				state: number;
			};
		};
		cham_temp: number;
		ctc: {
			info: {
				temp: number;
			};
			state: number;
		};
		ext_tool: {
			calib: number;
			low_prec: boolean;
			mount: number;
			th_temp: number;
			type: string;
		};
		extruder: {
			info: Array<{
				filam_bak: any[];
				hnow: number;
				hpre: number;
				htar: number;
				id: number;
				info: number;
				snow: number;
				spre: number;
				star: number;
				stat: number;
				temp: number;
			}>;
			state: number;
		};
		fan: number;
		laser: {
			power: number;
		};
		nozzle: {
			exist: number;
			info: Array<{
				diameter: number;
				id: number;
				tm: number;
				type: string;
				wear: number;
			}>;
			state: number;
		};
		plate: {
			base: number;
			cali2d_id: string;
			cur_id: string;
			mat: number;
			tar_id: string;
		};
		type: number;
	};
	err: string;
	fail_reason: string;
	fan_gear: number;
	file: string;
	force_upgrade: boolean;
	fun: string;
	gcode_file: string;
	gcode_file_prepare_percent: string;
	gcode_state: string;
	heatbreak_fan_speed: string;
	hms: any[];
	home_flag: number;
	hw_switch_state: number;
	ipcam: {
		agora_service: string;
		brtc_service: string;
		bs_state: number;
		ipcam_dev: string;
		ipcam_record: string;
		laser_preview_res: number;
		mode_bits: number;
		resolution: string;
		rtsp_url: string;
		timelapse: string;
		tl_store_hpd_type: number;
		tl_store_path_type: number;
		tutk_server: string;
	};
	job: {
		cur_stage: {
			idx: number;
			state: number;
		};
		stage: any[];
	};
	job_attr: number;
	job_id: string;
	lan_task_id: string;
	layer_num: number;
	lights_report: Array<{
		mode: string;
		node: string;
	}>;
	maintain: number;
	mapping: any[];
	mc_action: number;
	mc_err: number;
	mc_percent: number;
	mc_print_error_code: string;
	mc_print_stage: string;
	mc_print_sub_stage: number;
	mc_remaining_time: number;
	mc_stage: number;
	model_id: string;
	net: {
		conf: number;
		info: Array<{
			ip: number;
			mask: number;
		}>;
	};
	nozzle_diameter: string;
	nozzle_target_temper: number;
	nozzle_temper: number;
	nozzle_type: string;
	online: {
		ahb: boolean;
		ext: boolean;
		version: number;
	};
	percent: number;
	plate_cnt: number;
	plate_id: number;
	plate_idx: number;
	prepare_per: number;
	print_error: number;
	print_gcode_action: number;
	print_real_action: number;
	print_type: string;
	profile_id: string;
	project_id: string;
	queue: number;
	queue_est: number;
	queue_number: number;
	queue_sts: number;
	queue_total: number;
	remain_time: number;
	s_obj: any[];
	sdcard: boolean;
	sequence_id: string;
	spd_lvl: number;
	spd_mag: number;
	stat: string;
	state: number;
	stg: any[];
	stg_cur: number;
	subtask_id: string;
	subtask_name: string;
	task_id: string;
	total_layer_num: number;
	upgrade_state: {
		ahb_new_version_number: string;
		ams_new_version_number: string;
		consistency_request: boolean;
		dis_state: number;
		err_code: number;
		ext_new_version_number: string;
		force_upgrade: boolean;
		idx: number;
		idx2: number;
		lower_limit: string;
		message: string;
		module: string;
		new_version_state: number;
		ota_new_version_number: string;
		progress: string;
		sequence_id: number;
		sn: string;
		status: string;
	};
	upload: {
		file_size: number;
		finish_size: number;
		message: string;
		oss_url: string;
		progress: number;
		sequence_id: string;
		speed: number;
		status: string;
		task_id: string;
		time_remaining: number;
		trouble_id: string;
	};
	ver: string;
	vir_slot: Array<{
		bed_temp: string;
		bed_temp_type: string;
		cali_idx: number;
		cols: string[];
		ctype: number;
		drying_temp: string;
		drying_time: string;
		id: string;
		nozzle_temp_max: string;
		nozzle_temp_min: string;
		remain: number;
		tag_uid: string;
		total_len: number;
		tray_color: string;
		tray_diameter: string;
		tray_id_name: string;
		tray_info_idx: string;
		tray_sub_brands: string;
		tray_type: string;
		tray_uuid: string;
		tray_weight: string;
		xcam_info: string;
	}>;
	vt_tray: {
		bed_temp: string;
		bed_temp_type: string;
		cali_idx: number;
		cols: string[];
		ctype: number;
		drying_temp: string;
		drying_time: string;
		id: string;
		nozzle_temp_max: string;
		nozzle_temp_min: string;
		remain: number;
		tag_uid: string;
		total_len: number;
		tray_color: string;
		tray_diameter: string;
		tray_id_name: string;
		tray_info_idx: string;
		tray_sub_brands: string;
		tray_type: string;
		tray_uuid: string;
		tray_weight: string;
		xcam_info: string;
	};
	wifi_signal: string;
	xcam: {
		allow_skip_parts: boolean;
		buildplate_marker_detector: boolean;
		cfg: number;
		first_layer_inspector: boolean;
		halt_print_sensitivity: string;
		print_halt: boolean;
		printing_monitor: boolean;
		spaghetti_detector: boolean;
	};
	xcam_status: string;
}

// H2D reports full state changes
export type H2DReportState = H2DState;
