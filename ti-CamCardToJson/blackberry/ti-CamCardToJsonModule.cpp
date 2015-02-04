/**
 * ti-CamCardToJson.cpp
 *
 *
 */

#include "ti-CamCardToJsonModule.h"
#include "ExampleProxy.h"

ti-CamCardToJsonModule::ti-CamCardToJsonModule(const char* name) : Ti::TiModule(name)
{
	addFunction("createExample", ExampleProxy::CreateProxy);
}

ti-CamCardToJsonModule::~ti-CamCardToJsonModule()
{

}

Ti::TiValue ti-CamCardToJsonModule::getModuleId()
{
	Ti::TiValue val;
	val.setString("ti.CamCardToJson");
	return val;
}
Ti::TiValue ti-CamCardToJsonModule::getModuleVersion()
{
	Ti::TiValue val;
	val.setString("1.0.0");
	return val;
}
Ti::TiValue ti-CamCardToJsonModule::getModuleName()
{
	Ti::TiValue val;
	val.setString("ti-CamCardToJson");
	return val;
}