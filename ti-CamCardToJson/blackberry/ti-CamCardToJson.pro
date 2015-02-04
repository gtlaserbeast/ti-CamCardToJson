TEMPLATE = lib

QMAKE_CC = $(NDK_CCACHE) $${QMAKE_CC}
QMAKE_CXX = $(NDK_CCACHE) $${QMAKE_CXX}

CONFIG += qt staticlib warn_on debug_and_release cascades mobility
MOBILITY += sensors


TI_BB_SDK = "/Users/will/Library/Application Support/Titanium/mobilesdk/osx/3.5.0.GA/blackberry/libs"

INCLUDEPATH += \
	. \
    $${TI_BB_SDK}/libv8/include \
    $${TI_BB_SDK}/ticore/include \
    ./include

QMAKE_LIBDIR += \
	./libs

SOURCES += \
    ./*.cpp

HEADERS += \
    ./*.h

device {
	CONFIG(release, debug|release) {
		DESTDIR = a.le-v7
	}
	CONFIG(debug, debug|release) {
		DESTDIR = a.le-v7-g
	}
}

simulator {
	CONFIG(release, debug|release) {
		DESTDIR = a
	}
	CONFIG(debug, debug|release) {
		DESTDIR = a-g
	}
}

OBJECTS_DIR = $${DESTDIR}/.obj
MOC_DIR = $${DESTDIR}/.moc
RCC_DIR = $${DESTDIR}/.rcc
UI_DIR = $${DESTDIR}/.ui
