	<wi-query>
		<wi-hypercube target="cube1">
			<dimension>Dim1</dimension>
			<dimension>Dim2</dimension>
			<expression>Sum(Expression1)</expression>
		</wi-hypercube>
		
		<wi-hypercube target="cube2">
			<dimension>Dim3</dimension>
			<dimension>Dim4</dimension>
			<expression>Sum(Expression2)</expression>
		</wi-hypercube>
	
		<wi-expression type="value" target="expression1">
			=GetPossibleCount(Dim1)
		</wi-expression>
	
		<template>
	
			<!-- Access cube 1 -->
			<ng-repeat for="row in wi.Rows('results.cube1')">
				{{safe "{{row.col(0).qText}}"}}
			</ng-repeat>
	
			<!-- Access cube 2 -->
			<!-- .... -->
	
	
			<b>Get Possible Count for Dim1</b><br/>
			{{safe "{{result.expression1}}"}}
	
		</template>
	</wi-query>