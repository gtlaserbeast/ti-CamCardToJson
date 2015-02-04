/**
 * ti-CamCardToJson.h
 *
 *
 */

#ifndef NATIVE_ti-CamCardToJson_MODULE
#define NATIVE_ti-CamCardToJson_MODULE

#include "TiCore.h"

class ti-CamCardToJsonModule : public Ti::TiModule
{
public:
	CREATE_MODULE(ti-CamCardToJsonModule);
	ti-CamCardToJsonModule(const char*);
	virtual ~ti-CamCardToJsonModule();

	virtual Ti::TiValue getModuleId();
	virtual Ti::TiValue getModuleVersion();
	virtual Ti::TiValue getModuleName();


};

#endif
