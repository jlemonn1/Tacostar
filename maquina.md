Parte 1. Diseño FSM + LTL (30%)
Se desea diseñar la lógica de control de un sistema de presurización de cabina de una aeronave.
Entradas:
- PRESSURE_LOW
- PRESSURE_HIGH
- CABIN_ALT_HIGH
- BLEED_OK
- MANUAL_DUMP
- EMERGENCY_DESCENT
- RESET
- TICK_1S
Salidas:
- VALVE_IN
- VALVE_OUT
- COMPRESSOR
- OXYGEN_MASKS
- ALARM

Requisitos:
1. En operación normal, el sistema mantiene la presión de cabina dentro de rango.
2. Si PRESSURE_LOW = 1 y BLEED_OK = 1:
- se activa COMPRESSOR
- se cierra VALVE_OUT
3. Si PRESSURE_HIGH = 1:
- se desactiva COMPRESSOR
- se abre VALVE_OUT
4. Si CABIN_ALT_HIGH = 1 durante más de 5 segundos:
- se despliegan OXYGEN_MASKS
- se activa ALARM
5. Si MANUAL_DUMP = 1:
- VALVE_OUT debe abrirse inmediatamente
- COMPRESSOR debe apagarse
6. Si EMERGENCY_DESCENT = 1:
- OXYGEN_MASKS = 1
- ALARM = 1
7. Nunca pueden estar activas simultáneamente VALVE_IN y VALVE_OUT.
8. Si BLEED_OK = 0 durante más de 10 segundos, el sistema entra en estado FAULT.
9. Desde FAULT solo se puede volver a operación normal mediante RESET.

Se pide:
1. Diseñar la FSM indicando estados, transiciones, guardas y acciones.